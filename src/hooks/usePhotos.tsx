import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { createContext, type ReactNode, useContext, useMemo } from "react";

interface PhotoAsset {
	name: string;
	img: {
		url: string;
	} | null;
}

interface AllPhotosResponse {
	allPhotos: PhotoAsset[];
}

interface PhotosContextValue {
	photos: Record<string, string>;
	loading: boolean;
	error: Error | undefined;
}

const ALL_PHOTOS_QUERY = gql`
	query AllPhotos {
		allPhotos {
			name
			img {
				url
			}
		}
	}
`;

const PhotosContext = createContext<PhotosContextValue | null>(null);

export function PhotosProvider({ children }: { children: ReactNode }) {
	const { data, loading, error } = useQuery<AllPhotosResponse>(
		ALL_PHOTOS_QUERY,
		{
			fetchPolicy: "cache-first",
		},
	);

	const photos = useMemo(() => {
		const map: Record<string, string> = {};
		for (const asset of data?.allPhotos ?? []) {
			if (asset.name && asset.img?.url) {
				map[asset.name] = asset.img.url;
			}
		}
		return map;
	}, [data]);

	return (
		<PhotosContext.Provider
			value={{
				photos,
				loading,
				error: error as Error | undefined,
			}}
		>
			{children}
		</PhotosContext.Provider>
	);
}

export function usePhotos() {
	const ctx = useContext(PhotosContext);
	if (!ctx) {
		throw new Error("usePhotos must be used within a PhotosProvider");
	}
	return ctx;
}

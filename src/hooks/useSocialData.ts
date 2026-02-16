import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

interface SocialData {
	linkedin: string | null;
	instagram: string | null;
	facebook: string | null;
}

interface SocialResponse {
	social: SocialData | null;
}

const SOCIAL_QUERY = gql`
	query Social {
		social {
			linkedin
			instagram
			facebook
		}
	}
`;

export function useSocialData() {
	const { data, loading, error } = useQuery<SocialResponse>(SOCIAL_QUERY, {
		fetchPolicy: "cache-first",
	});

	return {
		social: data?.social ?? null,
		loading,
		error,
	};
}

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const datoCmsToken = import.meta.env.VITE_DATO_CMS_CLIENT_TOKEN;

if (!datoCmsToken) {
	console.warn(
		"[DatoCMS] Brak DATO_CMS_CLIENT_TOKEN w pliku .env – Apollo Client będzie działał tylko, jeśli token zostanie ustawiony.",
	);
}

console.log({ datoCmsToken });

export const apolloClient = new ApolloClient({
	link: new HttpLink({
		uri: "https://graphql.datocms.com/",
		headers: {
			Authorization: `Bearer ${datoCmsToken ?? ""}`,
		},
	}),
	cache: new InMemoryCache(),
});

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

interface ContactData {
	phone: string;
	location: string;
	email: string;
}

interface ContactResponse {
	contact: ContactData | null;
}

const CONTACT_QUERY = gql`
	query Contact {
		contact {
			phone
			location
			email
		}
	}
`;

export function useContactData() {
	const { data, loading, error } = useQuery<ContactResponse>(CONTACT_QUERY, {
		fetchPolicy: "cache-first",
	});

	return {
		contact: data?.contact ?? null,
		loading,
		error,
	};
}

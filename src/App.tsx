import { ApolloProvider, gql } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";

const GET_LESSONS_QUERY = gql`
	query {
		lessons {
			id
			title
		}
	}
`;

interface lesson {
	id: string;
	title: string;
}

function App() {
	// const { data } = useQuery(GET_LESSONS_QUERY);

	return (
		<>
			<ApolloProvider client={client}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</ApolloProvider>
		</>
	);
}

export default App;

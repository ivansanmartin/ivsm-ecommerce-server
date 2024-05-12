import { Query, Resolver } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@Resolver()
export class ClientsResolver {

    @Query(() => GraphQLJSON)
    async getClients(): Promise<any> {
        return {data: "clients"};
    }

}

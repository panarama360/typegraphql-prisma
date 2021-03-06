import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { DirectorCreateOrConnectWithoutmoviesInput } from "../inputs/DirectorCreateOrConnectWithoutmoviesInput";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorUpdateWithoutMoviesInput } from "../inputs/DirectorUpdateWithoutMoviesInput";
import { DirectorUpsertWithoutMoviesInput } from "../inputs/DirectorUpsertWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorUpdateOneRequiredWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorCreateWithoutMoviesInput, {
    nullable: true
  })
  create?: DirectorCreateWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: true
  })
  connect?: DirectorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DirectorUpdateWithoutMoviesInput, {
    nullable: true
  })
  update?: DirectorUpdateWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorUpsertWithoutMoviesInput, {
    nullable: true
  })
  upsert?: DirectorUpsertWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorCreateOrConnectWithoutmoviesInput, {
    nullable: true
  })
  connectOrCreate?: DirectorCreateOrConnectWithoutmoviesInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientCreateOrConnectWithouteditorPostsInput } from "../inputs/ClientCreateOrConnectWithouteditorPostsInput";
import { ClientCreateWithoutEditorPostsInput } from "../inputs/ClientCreateWithoutEditorPostsInput";
import { ClientUpdateWithoutEditorPostsInput } from "../inputs/ClientUpdateWithoutEditorPostsInput";
import { ClientUpsertWithoutEditorPostsInput } from "../inputs/ClientUpsertWithoutEditorPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateOneWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => ClientCreateWithoutEditorPostsInput, {
    nullable: true
  })
  create?: ClientCreateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ClientUpdateWithoutEditorPostsInput, {
    nullable: true
  })
  update?: ClientUpdateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpsertWithoutEditorPostsInput, {
    nullable: true
  })
  upsert?: ClientUpsertWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithouteditorPostsInput, {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithouteditorPostsInput | undefined;
}

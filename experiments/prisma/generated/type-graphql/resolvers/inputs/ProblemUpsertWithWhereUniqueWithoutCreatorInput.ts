import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemCreateWithoutCreatorInput } from "../inputs/ProblemCreateWithoutCreatorInput";
import { ProblemUpdateWithoutCreatorInput } from "../inputs/ProblemUpdateWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: ProblemUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => ProblemCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: ProblemCreateWithoutCreatorInput;
}

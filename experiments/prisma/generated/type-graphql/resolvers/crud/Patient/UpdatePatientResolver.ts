import * as TypeGraphQL from "type-graphql";
import { UpdatePatientArgs } from "./args/UpdatePatientArgs";
import { Patient } from "../../../models/Patient";

@TypeGraphQL.Resolver(_of => Patient)
export class UpdatePatientResolver {
  @TypeGraphQL.Mutation(_returns => Patient, {
    nullable: true
  })
  async updatePatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePatientArgs): Promise<Patient | null> {
    return ctx.prisma.patient.update(args);
  }
}

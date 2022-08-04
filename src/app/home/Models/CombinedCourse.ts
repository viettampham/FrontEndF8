import {Course} from "./Course-model";

export class CombinedCourse{
  id!: string
  image!: string
  imageUrl!: string
  slug!: string
  title!: string
  courses!: Course[]
}

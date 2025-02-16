import mongoose, {
  Schema,
  Document
} from "mongoose"


interface IPost extends Document {
  title: string
  slug: string
  description: string
  content: string
  featuredImage: string
  views: number
}
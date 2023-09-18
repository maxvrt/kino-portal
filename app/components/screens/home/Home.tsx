import { FC } from "react"
import { IHome } from "./home.interface"
import Layout from "@/components/layout/Layout"
import { Meta } from "@/utils/meta/Meta"
import Heading from "@/components/ui/heading/Heading"

const Home:FC<IHome> = () => {
  return (
    <Meta title="Просмотр кино онлайн" description="Онлайн кинотеатр, просмотр фильмов и сериалов.">
      <Heading title="Watch movies online" className="text-gray-300 mb-8 text-xl"/>
    </Meta>
  )
}
export default Home
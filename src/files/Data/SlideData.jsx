import { RiHome2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BsPeople, BsCalendar, BsBook, BsBookmarks } from "react-icons/bs";
import { FiBook } from "react-icons/fi";

export const SlideData = [

    {
        path: "/todas_publicacoes",
        nome: "Inicio",
        icone: <RiHome2Line />,
    },
    {
        path: "/perfil",
        nome: "Perfil",
        icone: <BsCalendar />,
    },
    {
        path: "/registar",
        nome: "Publicar",
        icone: <BsPeople />,
    },
    {
        path: "/todas_publicacoes",
        nome: "Procurar",
        icone: <AiOutlineUser />,
    },
    {
        path: "/minhas_publicacoes",
        nome: "Minhas Publicacoes",
        icone: <FiBook />,
    },

]
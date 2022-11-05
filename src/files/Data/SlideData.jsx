import { RiHome2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import {  BsSearch,BsFiles,BsCloudUpload } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";


export const SlideData = [

    {
        path: "/todas_publicacoes",
        nome: "Inicio",
        icone: <RiHome2Line />,
    },
    {
        path: "/perfil",
        nome: "Perfil",
        icone: <AiOutlineUser />,
    },
    {
        path: "/registar",
        nome: "Publicar",
        icone: <BsCloudUpload />,
    },
    {
        path: "/todas_publicacoes",
        nome: "Procurar",
        icone: <BsSearch/>,
    },
    {
        path: "/mensagens",
        nome: "Mensagens",
        icone: <IoChatbubblesOutline/>,
    },
    {
        path: "/minhas_publicacoes",
        nome: "Minhas Publicações",
        icone: <BsFiles />,
    },

]
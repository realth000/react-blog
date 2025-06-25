import type {Route} from './+types/home';
import {NavLink} from "react-router";

export async function loader() {
    return { message : 'hello world!'}
}

export default function Home({
    loaderData,actionData,params,matches
                             }: Route.ComponentProps) {
    console.log('loaderData', loaderData)
    console.log('actionData', actionData)
    console.log('params', params)
    console.log('matches', matches)
    return (
        <><h1>Hello world!</h1><NavLink to='/' end> Home</NavLink></>
    )
}

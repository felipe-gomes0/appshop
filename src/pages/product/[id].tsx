import { useRouter } from "next/router"
// Sistema de file-system router
export default function Product() {
    const { query } = useRouter();
    
    return (
        <h1>product</h1>
    )
}
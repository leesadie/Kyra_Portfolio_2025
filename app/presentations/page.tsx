import ClientOnly from "../components/ClientOnly";
import PresentationsClient from "./PresentationsClient";

const PresentationsPage = () => {
    return (
        <ClientOnly>
            <PresentationsClient />
        </ClientOnly>
    );
}

export default PresentationsPage;
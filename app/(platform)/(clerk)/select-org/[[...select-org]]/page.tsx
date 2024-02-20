import { OrganizationList } from "@clerk/nextjs"; 

export default function Organization () {
    return (
        <OrganizationList 
            hidePersonal 
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
        />
    )
}
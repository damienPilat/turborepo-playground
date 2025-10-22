export interface Credits {
    name: string;
    link?: string;
    text?: string;
}

export function Credits({creditsData}: { creditsData: Credits[] }) {
    return (
        <>
            {creditsData && creditsData.map((credit) => (
                <p key={credit.name}><a href={credit.link} target="_blank">{credit.name}</a>: {credit.text}</p>
            ))}
        </>
    )
}

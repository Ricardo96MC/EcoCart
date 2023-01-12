import { useEffect, useState } from "react";
import { ArtistHero } from "../components/ArtistHero";

export function ArtistPage(props: any) {
    const [searchResult, setSearchResult] = useState<any | null>({});
    const [isFollowing, setIsFollowing] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
            async function loadData() {
                console.log("Loading: ", props)
                setSearchResult(props);
                setLoading(false)
                //setIsFollowing(false);
            }
            loadData();
        }, [props])
        
    return (<>
 {!isLoading ? <ArtistHero artistSearchResult={searchResult.artistSearchResult} isFollowing={isFollowing} setFollowing={setIsFollowing}></ArtistHero> : 'Loading...'    }</>
    )
}
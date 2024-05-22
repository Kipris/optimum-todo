import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { $Container, $Box, $DataContainer } from "./external-data.styled";
import { $Separator } from "../app.styled";

export const ExternalData: React.FC = () => {
    const [externalData, setExternalData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadData = async () => {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/proxy');
        const data = await response.json();
        const updatedData = data.flatMap((item: any) => item.apps || []);
        setExternalData(updatedData);
        setIsLoading(false);
    }

    return (
        <$Container>
            <$Separator />
            <$Box>
                <button type="button" onClick={handleLoadData}>Load data from external resource</button>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <$DataContainer>
                        {externalData?.map((item: any) => (
                            <div key={uuidv4()}>{item.name}</div>
                        )) || null}
                    </$DataContainer>
                )}
            </$Box>
        </$Container>
    );
};

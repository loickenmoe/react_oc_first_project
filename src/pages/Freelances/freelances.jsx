import { freelanceProfiles } from ".";
import Card from "../../components/Card";


function Freelances(){

    return (
        <div>
              <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card 
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={42}
                />
            ))} 
        </div>
    );
}

export default Freelances
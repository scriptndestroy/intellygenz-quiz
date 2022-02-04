import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { XatakaFeed } from "../../interfaces/xatakaFeed";
import { xatakaService } from "../../services/allServices";
import FeedCard from "../card/Card";

interface HomeViewProps {
  children?: any;
}

const Home: React.FunctionComponent<HomeViewProps> = (props: HomeViewProps) => {
  const [feed, setFeed] = useState<XatakaFeed[]>([] as XatakaFeed[]);

  useEffect(() => {
    xatakaService.getAll().then((values: XatakaFeed[]) => {
      setFeed(values);
    });
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            {feed.map((v: any) =>{
               return <FeedCard values={v} />
            })}          
        </Grid>        
      </Grid>
    </div>
  );
};

export default Home;

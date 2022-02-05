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
    const parseXML = (data: any) => {
      var elements: XatakaFeed[] = [] as XatakaFeed[];
      var parser = new DOMParser();
      for (let index = 0; index < data.length; index++) {
          debugger
          var htmlDoc = parser.parseFromString(data[index].childNodes[11].childNodes[1].data, 'text/html');
          var img = htmlDoc.childNodes[0].childNodes[1].childNodes[0].childNodes[1] as HTMLImageElement; 
        elements.push({
          title: data[index].childNodes[1].childNodes[0].data,
          link: data[index].childNodes[3].childNodes[0].data,
          guid: data[index].childNodes[5].childNodes[0].data,
          pubDate: data[index].childNodes[7].childNodes[0].data,
          author: data[index].childNodes[9].childNodes[0].data,
          description: data[index].childNodes[11].childNodes[1].data,
          imgSrc: img.src
        });
      }
    //   const formatData = data.map((i: any[]) => {
    //     return {
    //       title: i[0].childNodes[1].childNodes[0].data,
    //       link: i[0].childNodes[1].childNodes[3].data,
    //       guid: i[0].childNodes[1].childNodes[5].data,
    //       pubDate: i[0].childNodes[1].childNodes[7].data,
    //       author: i[0].childNodes[1].childNodes[9].data,
    //       description: i[0].childNodes[1].childNodes[11].data,
    //     };
    //   });
      setFeed(elements);
    };

    xatakaService
      .getAll()
      .then((response) => response)
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        parseXML(data.getElementsByTagName("item"));
      });
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {feed.map((v: any) => {
            return <FeedCard values={v} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

// Init
import { Grid, Typography } from "@mui/material";
import React from "react";

// Importing Components
import Button from "@mui/material/Button";

// Home Component
export default function BlogReadArticles(props) {
  return (
    <>
      {props.Reverse ? (
        <div className="BlogArticleMain">
          <Grid container spacing={1} className="BlogArticleContainer2">
            <Grid xs={12} sm={10} md={6}>
              <img width={props.width || "100%"} src={props.src} />
            </Grid>
            <Grid xs={12} sm={10} md={6}>
              <div className="BlogTypo">
                <Typography
                  sx={{
                    color: "#0F52BA",
                    fontSize: "1.3rem",
                    fontWeight: "800",
                  }}
                >
                  {props.title || "Manager une équipe en télétravail"}
                </Typography>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: ".7rem",
                    fontWeight: "500",
                    opacity: "50%",
                    margin: "3% 0%",
                  }}
                >
                  {props.PublishDate || "Published on Wed Oct 06 2021"}
                </Typography>
                <Typography
                  sx={{
                    fontSize: ".7rem",
                    fontWeight: "400",
                    width: "95%",
                  }}
                >
                  Dans le passé, il était facile de gérer une équipe d'employés
                  qui ne travaillaient pas à des milliers de kilomètres de chez
                  soi. Aujourd'hui, les entreprises adoptent la tendance à
                  l'éloignement en employant des travailleurs qualifiés aux
                  quatre coins du monde. Naturellement, le manager est
                  responsable non seulement de la gestion de l'équipe
                  d'employés, mais aussi de la formation, de l'encouragement et
                  du soutien de cette équipe. Cette responsabilité n'est pas
                  toujours aussi simple. C'est pourquoi nous allons discuter ici
                  des défis potentiels de la gestion d'une équipe à distance et
                  de la manière de surmonter ces obstaclesseulement de la
                  gestion de l'équipe d'employés, mais aussi de la formation, de
                  l'encouragement et du soutien de cette équipe. Cette
                  responsabilité n'est pas toujours aussi simple. C'est pourquoi
                  nous allons discuter ici des défis potentiels de la gestion
                  d'une équipe à distance et de la manière de surmonter ces
                  obstacles
                </Typography>
                <Button
                  size="small"
                  sx={{ color: "#42C2FF !important", marginTop: "2%" }}
                  variant="text"
                >
                  {props.BtnTexr || "READ MORE"}
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className="BlogArticleMain">
          <Grid container spacing={1} className="BlogArticleContainer1">
            <Grid xs={12} sm={10} md={6}>
              <div className="BlogTypo">
                <Typography
                  sx={{
                    color: "#0F52BA",
                    fontSize: "1.3rem",
                    fontWeight: "800",
                  }}
                >
                  {props.title || "Manager une équipe en télétravail"}
                </Typography>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: ".7rem",
                    fontWeight: "500",
                    opacity: "50%",
                    margin: "3% 0%",
                  }}
                >
                  {props.PublishDate || "Published on Wed Oct 06 2021"}
                </Typography>
                <Typography
                  sx={{
                    fontSize: ".7rem",
                    fontWeight: "400",
                    width: "95%",
                  }}
                >
                  Dans le passé, il était facile de gérer une équipe d'employés
                  qui ne travaillaient pas à des milliers de kilomètres de chez
                  soi. Aujourd'hui, les entreprises adoptent la tendance à
                  l'éloignement en employant des travailleurs qualifiés aux
                  quatre coins du monde. Naturellement, le manager est
                  responsable non seulement de la gestion de l'équipe
                  d'employés, mais aussi de la formation, de l'encouragement et
                  du soutien de cette équipe. Cette responsabilité n'est pas
                  toujours aussi simple. C'est pourquoi nous allons discuter ici
                  des défis potentiels de la gestion d'une équipe à distance et
                  de la manière de surmonter ces obstaclesseulement de la
                  gestion de l'équipe d'employés, mais aussi de la formation, de
                  l'encouragement et du soutien de cette équipe. Cette
                  responsabilité n'est pas toujours aussi simple. C'est pourquoi
                  nous allons discuter ici des défis potentiels de la gestion
                  d'une équipe à distance et de la manière de surmonter ces
                  obstacles
                </Typography>
                <Button
                  size="small"
                  sx={{ color: "#42C2FF !important", marginTop: "2%" }}
                  variant="text"
                >
                  {props.BtnTexr || "READ MORE"}
                </Button>
              </div>
            </Grid>
            <Grid xs={12} sm={10} md={6}>
              <img width={props.width || "100%"} src={props.src} />
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";

// function CardCourse({ imageUrl, name, description, id }) {
//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="250"
//         image={imageUrl}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Link to={"#"} className={"tw-no-underline"}>
//           <Button size="small" variant={"contained"}>
//             Xem chi tiết
//           </Button>
//         </Link>
//         <Button size="small">Xóa</Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default CardCourse;

import styles from "./style.module.scss";

function CardCourse({name}) {
  return (
    <div className= {styles.cover}>
      <div  className= {styles.course}>
        <div>
          <img  className= {styles.img} src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/classes/JSLPA/1657447270082" alt="" />
        </div>
        <div className= {styles.contant}>
          <div>
            <p className= {styles.name}>{name}</p>
            <p>JSLPA</p>
          </div>
          <div>
            <img className={styles.btn} src="https://www.shareicon.net/data/512x512/2016/06/04/775696_interface_512x512.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCourse;
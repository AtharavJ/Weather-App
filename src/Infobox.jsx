import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Infobox.css"



export default function Infobox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1673191898498-9bac443b2407?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    // let info = {
    //     city: "Delhi",
    //     feelslike: 24.48,
    //     temp: 25.05,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather: "haze"
    // };

    return (
        <div className="infobox">
            <h1>Weather Content</h1>
            {/* <h4>weather Info : {info.weather}</h4> */}
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={INIT_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="span">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature:{info.temp}&deg;c</p>
                            <p>Humidity:{info.humidity}</p>
                            <p>Min Temperature:{info.tempMin}&deg;c</p>
                            <p>Max Temperature:{info.tempMax}&deg;c</p>
                            <p>The weather of <b> {info.city} </b> can be described as
                                <b> {info.weather}</b> and it feels like <b> {info.feelslike}</b>
                                &deg;c</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>

        </div>
    )
}
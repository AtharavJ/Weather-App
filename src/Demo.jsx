import Button from '@mui/material/Button';


export default function Demo() {
    let handleClick = () => {
        alert("ahh! ahh! you are so good in bed daddy!!");
        iamcoming();
    };
    let iamcoming = () => {
        alert("Ahh!!! you make me come daddy, you are so good..");
    };
    return (
        <>
            <div>
                <h2>Hit me Harder Baby!!</h2>
                <br></br>
                <Button onClick={handleClick}>Make me come</Button>
            </div>
        </>
    )
}
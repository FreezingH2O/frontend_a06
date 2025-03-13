import { TextField,Select, MenuItem,FormLabel } from "@mui/material";
import DateReserve from '@/components/DateReserve';

export default function Booking() {
    return (
        <div className="flex flex-col  h-screen gap-10 w-1/4 mx-auto mt-20">
<h2 className="text-4xl font-bold">Booking</h2>

             <TextField
             id="name"
            name="Name-Lastname"  
            label="Name-Lastname" 
            variant="standard"    
            required            
        />

            <TextField
            id="contact"
            name="Contact-Number"  
            label="Contact-Number"
            variant="standard"   
            required             
             />

             <div className="flex flex-row justify-center gap-6 items-center">
       <FormLabel htmlFor="venue">Select Venue</FormLabel>
             <Select id="venue">
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
            </div>
            <DateReserve/>

            <button 
    name="Book Venue"
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
>
    Book Venue
</button>
            </div>
    );
}


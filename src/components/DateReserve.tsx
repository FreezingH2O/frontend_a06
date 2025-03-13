'use client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

export default function DateReserve() {
   
    return (
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker/>
        </LocalizationProvider>

        </div>
    );
}


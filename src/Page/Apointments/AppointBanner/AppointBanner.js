
import banner from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png'

const AppointBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header className='my-6' style={{background: `url(${bg})`}}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointBanner;
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';


const CitySelector = ({ cities, selectedCity, onSelect }) => {
    console.log(cities)
    return (
        <div className="city-selector">
            <select
                value={selectedCity ? selectedCity.city : ''}
                onChange={(e) => onSelect(cities.find(city => city.city === e.target.value))}
            >
                <option value="" disabled>Select a city</option>
                {cities.map((city, index) => (
                    <option key={index} value={city.city}>
                        {city.city}
                    </option>
                ))}
            </select>
        </div>
    );
};

export const Header = ({cities, selectedCity, onSelect, onBack}) => {

    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        <GlobalSvgSelector id="header-logo"/>
                    </div>
                    <div className={s.title}>React weather</div>
                </div>
                <div className="head">
                    <CitySelector cities={cities} selectedCity={selectedCity} onSelect={onSelect}/>
                </div>
            </div>

        </header>
    );
};

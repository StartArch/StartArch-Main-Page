import { Hero, Values, Services, Process } from '../components/sections';

export default function index() {
    const Style = {
        gap: '1.5rem'
    };

    return (
        <div style={Style}>
            <Hero/>
            <Values/>
            <Services/>
            <Process/>
        </div>
    );
}

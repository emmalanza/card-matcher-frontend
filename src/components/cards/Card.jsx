import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Card({ card }) {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden p-2">
      <LazyLoadImage
        src={`${card.imgUrl}/high.webp`}
        alt={card.name}
        effect="blur"
        className="w-full object-cover shadow-lg rounded-lg"
      />
      <div className="p-4">
        <h2 className="text-lg text-primary font-semibold">{card.name}</h2>
      </div>
    </div>
  );
}

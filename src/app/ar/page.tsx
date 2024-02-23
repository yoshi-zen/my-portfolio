import { MyFirstARJS } from '@/features/ar/arjs/MyFirstARJS/MyFirstARJS';
import { MyShadowMove } from '@/features/ar/three/MyLightMove/MyShadowMove';

export default function MyARPage() {
  return (
    <div className='w-1/2'>
      <h1>my first AR</h1>
      <MyFirstARJS />
    </div>
  );
}

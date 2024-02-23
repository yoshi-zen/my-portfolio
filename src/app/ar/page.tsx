import { MyShadowMove } from '@/features/ar/MyLightMove/MyShadowMove';
import { MyShadowCube } from '@/features/ar/MyShadowCube/MyShadowCube';
import { MyFirstAR } from 'features/ar/MyFirstAr/MyFirstAr';

export default function MyARPage() {
  return (
    <div className='w-1/2'>
      <h1>my first AR</h1>
      {/* <MyFirstAR /> */}
      {/* <MyShadowCube /> */}
      <MyShadowMove />
    </div>
  );
}

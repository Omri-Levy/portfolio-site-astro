import type { IInfo } from '@common/interfaces';
import type { TBlocks } from '@components/atoms/PWithBr/types';
import type { ICallToAction } from './components/molecules/CallsToAction/interfaces';

export interface IHero {
	heading: {
		en: TBlocks;
		he: TBlocks;
	};
	background: string;
	callToAction: ICallToAction;
}

export interface IHeroProps {
	page: IHero;
	cvUrl: IInfo[`cvUrl`];
}

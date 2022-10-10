import { ILocaleString } from '@interfaces';

export interface ICallToAction {
	text: ILocaleString;
	url: string;
}

export interface CallToActionProps {
	cvUrl: string;
	callToAction: ICallToAction | undefined;
}

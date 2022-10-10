import type { IGrecaptcha } from '@common/interfaces';
import { onMount } from 'solid-js';
import { setGrecaptcha } from '../grecaptcha';

export const GrecaptchaBridge = () => {
	onMount(() => {
		setGrecaptcha(
			(
				window as Window &
					typeof globalThis & {
						grecaptcha: IGrecaptcha;
					}
			).grecaptcha
		);
	});
};

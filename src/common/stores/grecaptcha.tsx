import type { IGrecaptcha } from '@common/interfaces';
import { createSignal } from 'solid-js';

export const [grecaptcha, setGrecaptcha] = createSignal<IGrecaptcha>();

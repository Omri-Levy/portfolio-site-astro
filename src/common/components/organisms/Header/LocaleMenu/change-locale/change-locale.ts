import { ELocale } from '@common/enums';

const handleLocale = (locale: ELocale) => () => {
	const [_leadingSlash, _oldLocale, ...rest] =
		window.location.pathname.split(`/`);
	const slug = rest.join(`/`);

	window.location.pathname = `/${
		locale === ELocale.EN ? `` : `${locale}/`
	}${slug}`;
};

const enBtn = document.getElementById(`en-locale`);
const heBtn = document.getElementById(`he-locale`);

enBtn?.addEventListener(`click`, handleLocale(ELocale.EN));
heBtn?.addEventListener(`click`, handleLocale(ELocale.HE));

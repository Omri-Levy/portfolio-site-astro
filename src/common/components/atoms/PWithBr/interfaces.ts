export interface IBlock {
	_type: string;
	children: Array<{
		text: string;
	}>;
}

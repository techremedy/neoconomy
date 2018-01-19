import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class GlanceCtrl extends Controller {
	constructor() {
		super(...arguments);

		//dummy starting data
		this.data = [
			{
				_id: 0,
				cmc_id: 'neo',
				name: 'NEO',
				symbol: 'NEO',
				price_USD: '139.51',
				global_rank: '8',
				neo_rank: '1',
				volume_usd_24: '897084000.0',
				market_cap_usd: '9046115000.0',
				available_supply: '65000000.0',
				total_supply: '100000000.0',
				max_supply: 'null',
				percent_change_1h: '-5.41',
				percent_change_24h: '-2.79',
				percent_change_7d: '24.61',
				last_updated: '1516314850'
			},
			{
				_id: 1,
				cmc_id: 'gas',
				name: 'GAS',
				symbol: 'GAS',
				price_USD: '56.84',
				global_rank: '56',
				neo_rank: '2',
				volume_usd_24: '33824900.0',
				market_cap_usd: '542202476.0',
				available_supply: '9539050.0',
				total_supply: '14647904.0',
				max_supply: '100000000.0',
				percent_change_1h: '-4.35',
				percent_change_24h: '-4.03',
				percent_change_7d: '17.31',
				last_updated: '1516315156'
			},
			{
				_id: 2,
				cmc_id: 'deepbrain-chain',
				name: 'DeepBrain Chain',
				symbol: 'DBC',
				price_USD: '0.172443',
				global_rank: '137',
				neo_rank: '3',
				volume_usd_24: '12167500.0',
				market_cap_usd: '155198700.0',
				available_supply: '900000000.0',
				total_supply: '10000000000.0',
				max_supply: '10000000000.0',
				percent_change_1h: '-7.24',
				percent_change_24h: '-4.12',
				percent_change_7d: '-51.53',
				last_updated: '1516315464'
			},
			{
				_id: 3,
				cmc_id: 'red-pulse',
				name: 'Red Pulse',
				symbol: 'RPX',
				price_USD: '0.257308',
				global_rank: '147',
				neo_rank: '4',
				volume_usd_24: '4133360.0',
				market_cap_usd: '139807916.0',
				available_supply: '543348500.0',
				total_supply: '1358371250.0',
				max_supply: 'null',
				percent_change_1h: '-3.92',
				percent_change_24h: '-16.06',
				percent_change_7d: '-47.77',
				last_updated: '1516315760'
			},
			{
				_id: 4,
				cmc_id: 'qlink',
				name: 'QLINK',
				symbol: 'QLC',
				price_USD: '0.492223',
				global_rank: '168',
				neo_rank: '5',
				volume_usd_24: '2693390.0',
				market_cap_usd: '118133520.0',
				available_supply: '240000000.0',
				total_supply: '600000000.0',
				max_supply: 'null',
				percent_change_1h: '-3.78',
				percent_change_24h: '-6.75',
				percent_change_7d: '-42.62',
				last_updated: '1516316064'
			}
		];
	}
}

GlanceCtrl.$name = 'GlanceCtrl';
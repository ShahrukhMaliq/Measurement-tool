import { Record } from 'immutable';

const LineRecord = Record({
    line_id: -1,
    line_name: '',
    Created_By: -1,
    Created_On: new Date(),
});
/**
 * Line
 */
export class Line extends LineRecord {
    private line_id: number;
    private line_name: string;
    private Created_By: number;
    private Created_On: Date;
    
    constructor(props) {
    	super(props);
    }
}
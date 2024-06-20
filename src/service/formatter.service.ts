
class Formatter {
    prepareDataForGraph = async (data: number[][]): Promise<{ xAxisData: number[], seriesData: number[] }> => {
        const xAxisData = data.map((item: any) => item[1]);
        const seriesData = data.map((item: any) => item[2]);

        return { xAxisData, seriesData };
    }

    prepareResults = async (data: any): Promise<{ sourceNode: string, sourceNodeType: string, targetNode: string, targetNodeType: string }[]> => {
        const rows: {
            sourceNode: string,
            sourceNodeType: string,
            targetNode: string,
            targetNodeType: string
        }[] = [];

        data.forEach((result: { sourceNode: any; sourceNodeType: any; targetNode: any; targetNodeType: any; }) => {
            rows.push({
                sourceNode: result.sourceNode,
                sourceNodeType: result.sourceNodeType,
                targetNode: result.targetNode,
                targetNodeType: result.targetNodeType
            });

        })

        return rows;
    }
}

export default Formatter;
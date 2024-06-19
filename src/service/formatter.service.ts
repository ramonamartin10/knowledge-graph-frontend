
class Formatter {
    prepareDataForGraph = async (data: number[][]): Promise<{ xAxisData: number[], seriesData: number[] }> => {

        console.log(data);

        const xAxisData = data.map((item: any) => item[1]);
        const seriesData = data.map((item: any) => item[2]);

        return { xAxisData, seriesData };
    }
}

export default Formatter;
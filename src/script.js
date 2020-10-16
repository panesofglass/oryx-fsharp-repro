(function () {
    document.addEventListener("DOMContentLoaded", main, false)

    function main() {
        const data = [
            {
                date: new Date("2020-05-01"),
                title: "Sample 1"
            },
            {
                date: new Date("2020-05-02"),
                title: "Sample 2"
            },
            {
                date: new Date("2020-05-02"),
                title: "Sample 2"
            },
            {
                date: new Date("2020-05-04"),
                title: "Sample 4"
            },
            {
                date: new Date("2020-05-05"),
                title: "Sample 5"
            }
        ]
        if (data.length > 0) {
            const titles = data.map(d => d.title).filter((v, i, a) => a.indexOf(v) === i)
            const dates = data.map(d => d.date).filter((v, i, a) => a.indexOf(v) === i)
            for (let item of titles) {
                const values = []
                for (let i = 0; i < dates.length; i++) {
                    values.push(Math.random() * 10)
                }
                const trace = {
                    x: dates,
                    y: values,
                    name: item,
                    type: "bar"
                }
                data.push(trace)
            }
        }
        
        var layout = {barmode: "stack"}
        
        Plotly.newPlot("sample-plot", data, layout)
    }
})()

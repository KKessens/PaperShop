
export function getNews(num: number): string {
    let news: string[] = [
    'No news for today!', // 0
    'Forest fire burns down trees!', // 1
    'Workers unite and raise the wage.', // 2
    'Error with factories making paper hard to produce!', // 3
    'Price of energy surges!', // 4
    'New bill to increase tariffs gets passed making resources more expensive!', // 5
    'Magic rain causes trees to grow faster!', // 6
    'Tariffs have been lifted!', // 7
    'New research allows for more efficient production of paper!', // 8
    'Teleporter has been created allowing instant shipping!', // 9
    'People have begun to recycle paper more!', // 10
    'Solar flare causes electronics to stop working! Everyone is switching to paper.', // 11
    'AI has caused people to distrust technology!', // 12
    'Pencils have become much cheaper!', // 13
    'New research shows that screens are ruining people’s vision!', // 14
    'Newspapers are making a new wave in popularity!', // 15
    'All students are given free tablets by the government.', // 16
    'Electronics become much cheaper!', // 17
    'Exams are switching to online for convenience.', // 18
    'People are becoming more conscious of the environment.', // 19
    'Plastic packaging becomes cheaper!' // 20
    ]
    
    return news[num]
    
}
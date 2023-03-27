import AppDataSource from './ormconfig';
import { Test } from './test.entity';

const main = async () => {
    try {
        const dataSource = await AppDataSource.initialize();
        await dataSource.query('TRUNCATE test');
        const repo = dataSource.getRepository(Test);
        await repo.save([
            { notSnakeCaseNumber: 1 },
            { notSnakeCaseNumber: 2 },
            { notSnakeCaseNumber: 3 },
        ])
        const result = await repo.sum('not_snake_case_number' as 'notSnakeCaseNumber', {}); // the workaround
        // const result = await repo.sum('notSnakeCaseNumber', {}); // the expected way
        console.log(result);
        process.exit(0);
    } catch (error) {
        throw error;
        process.exit(1);
    }
}

main();
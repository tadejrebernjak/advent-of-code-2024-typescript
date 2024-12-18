import fs from 'fs';
import path from 'path';

const DAYS = fs.readdirSync('src/days').filter((file) => !path.extname(file));

const processArgs = () => {
  let args = process.argv.slice(2);

  const containsAll = args.some((arg) => arg === 'all');
  if (containsAll) {
    args = DAYS;
  }

  const filteredArgs = args.map((arg) => (arg.length === 1 ? '0' + arg : arg)).filter((arg) => DAYS.includes(arg));
  return filteredArgs;
};

const importDayFiles = async (day) => {
  const importPath = `./dist/days/${day}/main.js`;
  const inputPath = path.join('inputs', `${day}.txt`);

  try {
    const { default: script } = await import(importPath);
    if (!script) {
      console.log(`Failed to import script for day ${day}!`);
      return null;
    }

    const input = fs.readFileSync(inputPath, 'utf-8');

    return { script, input };
  } catch (err) {
    console.log(`Failed to import files for day ${day}:`, err);
    return null;
  }
};

const runDay = async (day) => {
  const { script, input } = await importDayFiles(day);
  if (!script || input === null) {
    return;
  }

  const lines = input.split('\r\n');
  const answers = script(lines);

  console.log(`---------- Day ${day} ---------- `);
  console.log('Part 1:', answers.part1);
  console.log('Part 2:', answers.part2, '\n');
};

const runDays = async (days) => {
  for (const day of days) {
    await runDay(day);
  }
};

const main = () => {
  const days = processArgs();

  if (days.length === 0) {
    console.error('No valid days specified to run');
    return;
  }

  runDays(days);
};

main();

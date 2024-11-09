import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(request: Request) {
  const { resumePath } = await request.json();

  try {
    // Execute the Python script
    const { stdout, stderr } = await execAsync(`python apply_script.py "${resumePath}"`);

    if (stderr) {
      console.error('Python script error:', stderr);
      return NextResponse.json({ error: 'Failed to run application script' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Application process completed', output: stdout });
  } catch (error) {
    console.error('Error executing Python script:', error);
    return NextResponse.json({ error: 'Failed to run application script' }, { status: 500 });
  }
}
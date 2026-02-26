#!/usr/bin/env python3
import os
import shutil
import json

repo_path = r'C:\Users\denis\card-badbuilders'
rebase_merge_dir = os.path.join(repo_path, '.git', 'rebase-merge')

try:
    # Remove rebase-merge directory
    if os.path.exists(rebase_merge_dir):
        shutil.rmtree(rebase_merge_dir, ignore_errors=True)
        print(f"Removed {rebase_merge_dir}")
    
    # Verify the commit history
    import subprocess
    result = subprocess.run(
        ['git', 'log', '--oneline', '-5'],
        cwd=repo_path,
        capture_output=True,
        text=True
    )
    
    print("Current git log:")
    print(result.stdout)
    print("Stderr:", result.stderr)
    
    # Write status to file
    status = {
        "rebase_merge_removed": not os.path.exists(rebase_merge_dir),
        "git_log": result.stdout,
        "errors": result.stderr
    }
    
    with open(os.path.join(repo_path, 'rebase-status.json'), 'w') as f:
        json.dump(status, f, indent=2)
    
    print("Status written to rebase-status.json")
    
except Exception as e:
    print(f"Error: {e}")

$rebaseDir = ".git/rebase-merge"
$todoFile = ".git/rebase-merge/git-rebase-todo"

# Ensure picks are changed to drops
if (Test-Path $todoFile) {
    $content = Get-Content $todoFile -Raw
    if ($content -match "^pick") {
        Write-Host "Changing pick to drop in todo file..."
        $content = $content -replace "^pick ", "drop "
        $content | Set-Content $todoFile -NoNewline
    }
}

# Continue the rebase
Write-Host "Continuing rebase..."
& git rebase --continue --no-edit 2>&1

# Check result
$exitCode = $LASTEXITCODE
Write-Host "Rebase exit code: $exitCode"

# Verify rebase is complete
if (-not (Test-Path $rebaseDir)) {
    Write-Host "Rebase completed successfully"
} else {
    Write-Host "Rebase still in progress or failed"
}

# Show final log
Write-Host "`nFinal commit log:"
& git log --oneline -5
